<template>
    <div class="container-sm"> 
        <div class="d-flex justify-content-between px-5 pb-3 border-bottom">
            <div class="fw-bord"> 
                <a href="/"><h1>Vue.board</h1></a>
            </div>
        </div>
        <div class="mx-5 mt-5 text-start">
            <div class="mb-3">
                <label class="form-label">제목</label>
                <input type="email" class="form-control" placeholder="제목을 입력해 주세요.">
            </div>
            <div class="mb-3">
                <label class="form-label">글쓰기</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
        <div>
            <a href="/view"><button type="button" class="btn btn-outline-dark mt-5">등록</button></a>
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
  