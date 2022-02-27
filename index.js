let ul =  document.querySelector('ul')
let input = document.querySelector('input')



function fatch(url,successhandler){
    let xhr = new XMLHttpRequest
    xhr.open('GET',url)
    xhr.onload =  ()=> successhandler(JSON.parse(xhr.response))
    xhr.send()
}


function displayUI(imageName){
    let url = `https://api.unsplash.com/search/photos?query=${imageName};client_id=S9Uff-5Yqq4hCCF1E4yZOBAbd6ZS8SsY3F721EicTv8`
    fatch(url,function(imageList){
             ul.innerHTML=''
             imageList.results.forEach(info => {
                 console.log(info.urls)
                let images = info.urls.thumb
                let li = document.createElement('li')
                let img = document.createElement('img')
                img.src = images
                li.append(img)
                ul.append(li)
                })
    })

}
function handleInput(e){
        if(e.keyCode===13){
            displayUI(e.target.value)
            e.target.value=''
            }
        }


input.addEventListener('keyup',handleInput)