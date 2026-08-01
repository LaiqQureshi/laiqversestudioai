// ===== SHARE FIX - Runs alongside The Vault =====
(function() {
    const interval = setInterval(function() {
        if (typeof shareLightbox === 'function') {
            clearInterval(interval);
            const originalShare = shareLightbox;
            shareLightbox = function(platform) {
                if (!currentLightboxItem) return;
                const item = currentLightboxItem;
                const title = item.title;
                const text = (item.prompt || '').substring(0, 200) + '...';
                const url = 'https://laiqqureshi.github.io/laiqversestudioai/image-pages/' + item.id + '.html';
                const imageUrl = window.location.origin + '/' + item.folder + '/' + item.image;
                const brandMessage = '✨ ' + title + '\n\n' + text + '\n\n🎨 Prompt crafted by Laiq Ahmed Qureshi\n#LaiqVerse #AIinPakistan #TasteMatters';
                let shareUrl = '';
                switch(platform) {
                    case 'twitter': shareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(brandMessage) + '&url=' + encodeURIComponent(url); break;
                    case 'facebook': shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&quote=' + encodeURIComponent(title + ' — ' + brandMessage); break;
                    case 'linkedin': shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&summary=' + encodeURIComponent(brandMessage); break;
                    case 'whatsapp': shareUrl = 'https://wa.me/?text=' + encodeURIComponent(brandMessage + '\n\n' + url); break;
                    case 'pinterest': shareUrl = 'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&media=' + encodeURIComponent(imageUrl) + '&description=' + encodeURIComponent(title + ' — ' + brandMessage); break;
                    case 'bluesky': shareUrl = 'https://bsky.app/intent/compose?text=' + encodeURIComponent(brandMessage + '\n\n' + url); break;
                    case 'email': shareUrl = 'mailto:?subject=' + encodeURIComponent(title + ' — Premium AI Prompt') + '&body=' + encodeURIComponent(brandMessage + '\n\n' + url); break;
                    default: return;
                }
                if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=500');
                if (document.getElementById('lbShareMenu')) {
                    document.getElementById('lbShareMenu').classList.remove('show');
                }
            };
            console.log('✅ Share fix applied');
        }
    }, 500);
})();
