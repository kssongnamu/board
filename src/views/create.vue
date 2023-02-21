<template>
    <div> 
        <div class="d-flex justify-content-between px-5 pb-3 border-bottom">
            <div class="fw-bord"> 
                <a href="/"><h1>Vue.board</h1></a>
            </div>
        </div>
        <div>
            <div class="border-bottom">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">제목</span>
                    <input type="text" class="form-control" placeholder="제목을 입력해주세요." aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div>
                    내용
                    <textarea  value="내용을 입력해주세요"></textarea>
                </div>
            </div>
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
  