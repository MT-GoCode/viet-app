import axios from 'axios';

const BASE_URL = 'http://localhost:3007';

export {getBookData, getLessonData, getExerciseData};

// removed ${BASE_URL}

function getBookData() {
  const url = `${BASE_URL}/api/getContent/books`;
  return axios.get(url).then(response => response.data);
}

function getLessonData(book_num) {
    // will pass in a prop or something to make the :book dynamic
  const url = `${BASE_URL}/api/getContent/lessons/`;
  //${book_num}`;
  return axios.get(url).then(response => response.data);
}

function getExerciseData(lesson_id) {
  const url = `${BASE_URL}/api/getContent/exercises/`
  return axios.get(url).then(response => response.data)
}