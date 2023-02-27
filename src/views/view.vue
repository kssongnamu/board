<template>
    <div class="row">
        <div class="col-md-8 col-10 mx-auto mt-5"> 
            <div class="row">    
                <router-link class="btn border-0 p-0 fw-bold fs-1 mb-5 text-start" to="/">Vue.Board</router-link>
            </div>
            <div class="border-bottom">
                <div class="row">
                    <div class="col fs-3 pb-2">제목입니다.</div>
                </div>
                <div class="row">
                    <div class="col fs-6 pb-2">글쓴이 · 2022-05-28</div>
                    <div class="col fs-6 pb-2 fw-light text-end"></div>
                </div>
            </div>
            <div class="mt-3">
                <div class="row">
                    <div class="col fs-4">게시글입니다.</div>
                </div>
            </div>
            <div class="mt-5">
                <div class="row">
                    <div class="col">
                        <textarea class="border w-100 h-100" rows="2"></textarea>
                    </div>
                    <div class="col-3 col-md-2 col-xl-1 btn btn-light border pt-3">등록</div>
                </div>
            </div>
            <div class="mt-2 pb-2 border-bottom">
                <div class="row">
                    <div class="col fs-6 fw-bold mb-2"> 글쓴이 </div>
                </div>
                <div class="row">
                    <div class="col fs-5 mb-2"> 내용 </div>
                </div>
                <div class="row">
                    <div class="col fs-6 fw-light"> 2023-02-27 </div>
                    <div class="col-3 col-md-2 col-xl-1 p-0 btn btn-outline-dark">삭제</div>
                </div>
            </div>
            <div class="mt-2 pb-2 border-bottom">
                <div class="row">
                    <div class="col fs-6 fw-bold mb-2"> 글쓴이 </div>
                </div>
                <div class="row">
                    <div class="col fs-5 mb-2"> 내용 </div>
                </div>
                <div class="row">
                    <div class="col fs-6 fw-light"> 2023-02-27 </div>
                    <div class="col-3 col-md-2 col-xl-1 p-0 btn btn-outline-dark">삭제</div>
                </div>
            </div>
            <div class="row">
                <router-link to="/" class="col-3 col-md-2 col-xl-1 btn btn-outline-dark mt-5 ms-auto">삭제</router-link>
                <router-link to="/edit" class="col-3 col-md-2 col-xl-1 btn btn-outline-dark mt-5 ms-3">수정</router-link>
                <router-link to="/" class="col-3 col-md-2 col-xl-1 btn btn-outline-dark mt-5 ms-3">목록</router-link>
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
  