
function format_text(text){
    
    let r = ""
    let init = "<span>"
    let out = "</span>"
    
    text.split("").forEach(t => {
        r += init+t+out
        
    });
    
    return r
}

export default format_text;