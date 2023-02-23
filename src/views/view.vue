<template>
    <div> 
        <div class="contaier-sm d-flex justify-content-between px-5 pb-3 border-bottom">
            <div class="fw-bord"> 
                <a href="/"><h1>Vue.board</h1></a>
            </div>
        </div>
        <div>
            <div class="mx-5 mt-5">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">제목</span>
                    <span class="form-control">제목</span>
                </div>
                <div class="input-group">
                    <span class="input-group-text">내용</span>
                    <span class="form-control">내용</span>
                </div>
            </div>
        </div>
        <div>
            <a href="/"><button type="button" class="btn btn-outline-dark mt-5">목록</button></a>
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
  