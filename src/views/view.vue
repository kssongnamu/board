<template>
    <div class="container-sm mt-5"> 
        <router-link class="navbar-brand fw-bold fs-2" to="/">Vue.Board</router-link>
        <div class="row row-gap-4 mt-5">
            <div>
                <div class="fs-5 fw-bold mb-3">제목</div>
                <div class="border p-2 rounded-3">제목입니다.</div>
            </div>
            <div>
                <div class="fs-5 fw-bold mb-3">글쓰기</div>
                <div class="border p-2 rounded-3">게시글입니다.</div>
            </div>
        </div>
        <div class="row">
            <router-link to="/" class="col-2 btn btn-outline-dark mt-5 ms-auto">목록</router-link>
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
  