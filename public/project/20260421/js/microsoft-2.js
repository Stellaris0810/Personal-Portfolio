document.addEventListener('DOMContentLoaded', () => {
    const topBtn = document.getElementById('go-top');
    const footer = document.querySelector('footer'); // 確保你有 <footer> 標籤

    window.onscroll = function() {
        if (!topBtn || !footer) return;

        // 1. 控制顯示或隱藏
        if (document.documentElement.scrollTop > 300) {
            topBtn.style.display = "block";
            topBtn.style.opacity = "1";
        } else {
            topBtn.style.opacity = "0";
            setTimeout(() => { if(topBtn.style.opacity === "0") topBtn.style.display = "none"; }, 300);
        }

        // 2. 偵測是否碰到 Footer
        // 視窗底部的高度 = 捲動高度 + 視窗高度
        const scrollBottom = window.scrollY + window.innerHeight;
        // Footer 距離頁面頂部的高度
        const footerTop = footer.offsetTop;

        if (scrollBottom >= footerTop) {
            // 碰到 Footer 了：停在原地
            topBtn.style.position = "absolute";
            // 20px 是你想跟 Footer 保持的距離
            topBtn.style.bottom = (document.body.scrollHeight - footerTop + 20) + "px";
        } else {
            // 還沒碰到：繼續跟著視窗跑
            topBtn.style.position = "fixed";
            topBtn.style.bottom = "20px";
        }
    };

    // 點擊回頂部
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});