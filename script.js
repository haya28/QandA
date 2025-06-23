document.addEventListener('DOMContentLoaded', function() {
    // すべての「解答を表示」ボタンにイベントリスナーを追加
    const showAnswerButtons = document.querySelectorAll('.show-answer');
    
    showAnswerButtons.forEach(button => {
        button.addEventListener('click', function() {
            // クリックされたボタンの次の要素（解答部分）を取得
            const answer = this.nextElementSibling;
            
            // 解答の表示状態を切り替え
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                this.textContent = '解答を隠す';
            } else {
                answer.classList.add('hidden');
                this.textContent = '解答を表示';
            }
        });
    });
});