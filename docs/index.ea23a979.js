async function e(e){let t=await fetch("https://dummyjson.com/products/search?q="+e);return(await t.json()).products}function t(e){let t=document.querySelector(".bigsection");t.innerHTML="",e.forEach(e=>((function({images:e,title:t,description:n,rating:c,stock:a,category:s},o){let r=document.createElement("div"),m=document.createElement("img"),i=document.createElement("h2"),l=document.createElement("p"),u=document.createElement("p"),d=document.createElement("p"),p=document.createElement("p"),b=document.createElement("button");r.className="containerdiv",m.className="imgsize",m.src=e[0],i.innerText=t,l.className="pclass",l.innerHTML="<b>Description: </b> "+n,u.className="pclass",u.innerHTML="<b>Rating: </b>"+c,d.className="pclass",d.innerHTML="<b>Stock: </b>"+a,p.className="pclass",p.innerHTML="<b>Category: </b>"+s,b.innerText="add to cart",b.className="btnclass",a<10&&(d.className="warning",d.innerText="Stock: warning only "+a+" left"),r.append(m,i,l,u,d,p,b),o.append(r)})(e,t),e.images[0]))}!async function(){let e=await fetch("https://dummyjson.com/products");await e.json()}();const n=document.querySelector("#mainform");n.addEventListener("submit",c=>{c.preventDefault();let a=document.querySelector("#searchInput");console.log(a.value),e(a.value).then(t),n.reset()});
//# sourceMappingURL=index.ea23a979.js.map
