document.addEventListener('DOMContentLoaded',function(){
    const storyId = new URLSearchParams(window.location.search).get('id');

    fetch('stories.json')
       .then(response => response.json())
       .then(data => {
        const story = data.stories.find(story => story.id === storyId);

        if(story) {
            document.getElementById('story-title').textContent = story.title;
            document.getElementById('story-description').textContent = story.description;
            document.getElementById('story-cover').src = story.coverImage;
            document.getElementById('story-summary').textContent = story.summary;
            document.getElementById('story-author').textContent = story.author;
            document.getElementById('story-date').textContent = story.date;
            document.getElementById('story-category').textContent = story.category;
            document.getElementById('story-download').href = story.downpdf;
            
        } else { 
            document.getElementById('story-title').textContent = "القصة غير موجودة";
            document.getElementById('story-description').textContent = "";
        }
       })
       .catch(error => console.error('Error fetching story data :', error));
});