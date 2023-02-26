<template>
    <div class="container-sm mt-5"> 
        <h1 class="fw-bold mb-5">Vue.board</h1>
        <div class="row row-gap-4 fs-5 fw-bold">
            <div class="row">
                <label class="form-label p-0">제목</label>
                <input type="email" class="form-control" placeholder="제목을 입력해 주세요.">
            </div>
            <div class="row">
                <label class="form-label p-0">글쓰기</label>
                <textarea class="form-control" rows="10"></textarea>
            </div>
        </div>
        <div class="row">
            <router-link to="/view" class="col-2 btn btn-outline-dark mt-5 ms-auto">등록</router-link>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'board-cp',
    props: {
      msg: String
    }
  }
  </script>
  
  <style>
  </style>
  