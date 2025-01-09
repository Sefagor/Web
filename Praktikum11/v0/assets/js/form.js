let optionVideo = document.getElementById('video');
let optionText = document.getElementById('text');
let content = document.getElementById('content');
let duration = document.getElementById('duration');

optionVideo.addEventListener('change', function() {
    if (optionVideo.checked) {
        let newContent = document.createElement('textarea');
        newContent.id = content.id;
        newContent.name = content.name;
        newContent.placeholder = content.placeholder;
        newContent.required = content.required;
        content.parentNode.replaceChild(newContent, content);
        content = newContent;

        duration.className='reg';
    }
});

optionText.addEventListener('change', function() {
    if (optionText.checked) {
        let newContent = document.createElement('input');
        newContent.type = 'text';
        newContent.id = content.id;
        newContent.name = content.name;
        newContent.placeholder = content.placeholder;
        newContent.required = content.required;
        content.parentNode.replaceChild(newContent, content);
        content = newContent; 

        duration.className='';
    }
});