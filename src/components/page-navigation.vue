<template>
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
            <li class="page-item">
                <a class="page-link" @click="preBtn()" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li :class="['page-item', {'active' : blockStartNum + i - 1 === curPage}]" v-for="i in blockLength" :key="i">
                <a class="page-link" @click="changePage(blockStartNum + i - 1)"> {{ blockStartNum + i - 1 }} </a>
            </li>
            <li class="page-item">
                <a class="page-link" @click="nextBtn()" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'page-navigation',
        props: [
            'postsCount',
            'curPage'
        ],
        data() {
            return {
                blockNum: 1,
                blockStartNum: 1,
                blockLastNum: 1,
                blockLength: 1,
                lastPageNum: 1
            }
        },
        mounted() {
            this.loadLastPageNum();
            this.loadBlock();
        },
        methods: {
            loadLastPageNum() {
                const viewPageNum = 10;
                this.lastPageNum = (this.postsCount % viewPageNum === 0) ? Math.floor(this.postsCount / viewPageNum) : Math.floor(this.postsCount / viewPageNum) + 1;
            },
            loadBlock() {
                const pageCount = 5;
                this.blockStartNum = 1 + (this.blockNum - 1) * pageCount;
                this.blockLastNum = (this.blockNum * pageCount < this.lastPageNum) ? this.blockNum * pageCount : this.lastPageNum;
                this.blockLength = this.blockLastNum - this.blockStartNum + 1;
            },
            preBtn() {
                if (this.blockNum === 1) {
                    this.changePage(this.blockStartNum)
                } else {
                    this.blockNum -= 1;
                    this.loadBlock();
                    this.changePage(this.blockLastNum)
                }
            },
            nextBtn() {
                if (this.blockLastNum === this.lastPageNum) {
                    this.changePage(this.blockLastNum)
                } else {
                    this.blockNum += 1;
                    this.loadBlock();
                    this.changePage(this.blockStartNum)
                }
            },
            changePage(curPage) {
                this.$emit('changePage', curPage)
            }
        },
        watch: {
            postsCount() {
                this.loadLastPageNum();
                this.loadBlock();
            }
        }
    }
</script>

<style>
    .navbar .nav-item .nav-link.active{
        font-weight: bold;
        color: var(--bs-gray-800);
    }
    .pagination .page-item .page-link{
        color: var(--bs-dark-text);
        cursor: pointer;
    }
    .pagination .page-item.active>.page-link{
        background-color: var(--bs-dark-text);
        color: var(--bs-white);
        border-color: var(--bs-dark-text)
    }
</style>