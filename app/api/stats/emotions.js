import { ulid } from 'ulid';

import db from './db';

const source = 'org.howwefeel.moodmeter';
const millis_timestamp_length = 13;
const sentence_single = ['stats', 'is', 'feeling', 'tired.'];
const sentence_double = ['stats', 'is', 'feeling', 'tired', '&', 'absorbed.'];

export const collection = db.collection('emotions');

export const isValid = (body) => {
  if (
    !body ||
    !body.source ||
    !body.timestamp ||
    !body.text ||
    !body.text.length
  ) {
    return false;
  }

  if (body.source !== source) {
    return false;
  }

  if (body.timestamp.length !== millis_timestamp_length) {
    return false;
  }

  const sentence = body.text.split(' ');

  if (
    sentence.length !== sentence_single.length &&
    sentence.length !== sentence_double.length
  ) {
    return false;
  }

  return sentence[1] === sentence_single[1];
};

export const format = ({ timestamp, text }) => {
  const sentence = text.split(' ');
  const timestampMillis = parseInt(timestamp);

  const ultimateEmotion = {
    timestamp: timestampMillis,
    id: ulid(timestampMillis),
    user: sentence[0],
    emotion: sentence[sentence.length - 1].replace('.', ''),
  };

  if (sentence.length === sentence_single.length) {
    return [ultimateEmotion];
  }

  const penultimateEmotion = {
    ...ultimateEmotion,
    id: ulid(timestampMillis),
    emotion: sentence[sentence.length - 3],
    isFirstOfPair: true, // gambling there won't ever be more than two per update
  };

  return [penultimateEmotion, ultimateEmotion];
};
