<template>  
    <div class="modal fade" id="modal-alert">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="ModalLabel">알림</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    글의 작성자만 가능합니다.
                </div>
                <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">확인</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modal-alert'
    }
</script>