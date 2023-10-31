document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('visible');
    }else{
        console.log('hidden');
    }
});