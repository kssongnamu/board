<template>
    <div> 
        <div class="d-flex justify-content-between px-5 pb-3 border-bottom">
            <div class="fw-bord"> 
                <a href="/"><h1>Vue.board</h1></a>
            </div>
            <div>
                <a href="/sign-up"><button type="button" class="btn btn-outline-dark">로그인</button></a>
            </div>
        </div>
        <div>
            <div class="d-flex justify-content-between p-3 mx-5 border-bottom">
                <div>
                    번호
                </div>
                <div>
                    <a href="/view">제목</a>
                </div>
                <div> 
                    시간
                </div>
            </div>
            <div class="d-flex justify-content-between p-3 mx-5 border-bottom">
                <div>
                    번호
                </div>
                <div>
                    <a href="/view">제목</a>
                </div>
                <div> 
                    시간
                </div>
            </div>
        </div>
        <div class="mt-5">
            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">글쓰기</button>
        </div>
    </div>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">경고</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    로그인 후에 글을 쓰실 수 있습니다.
                </div>
                <div class="modal-footer">
                    <a href="/"><button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">목록으로</button></a>
                    <a href="/create"><button type="button" class="btn btn-dark">로그인</button></a>
                </div>
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
    },
    methods: {
    }
    
    }
</script>

<style>
    
</style>
