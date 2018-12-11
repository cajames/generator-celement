<template functional>
<div class="video-container">
    <iframe 
      :src="`https://www.youtube.com/embed/${props.id}?rel=0`" 
      frameborder="0" 
      allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
</template>
