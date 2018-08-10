
export function parseHTML(string){
    const html = string.replace(/↵/g,'');
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text;
}
