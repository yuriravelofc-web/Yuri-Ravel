
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('on') })
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navlinks a').forEach(a=>{
  const target = a.getAttribute('href').split('/').pop();
  if((path === '' && target === 'index.html') || target === path) a.classList.add('active');
});

const menu = document.querySelector('.menu');
const nav = document.querySelector('.navlinks');
if(menu){
  menu.addEventListener('click',()=>{
    const open = nav.dataset.open === '1';
    nav.dataset.open = open ? '0' : '1';
    nav.style.display = open ? '' : 'flex';
    if(!open){
      nav.style.position='absolute'; nav.style.top='78px'; nav.style.left='15px'; nav.style.right='15px';
      nav.style.flexDirection='column'; nav.style.gap='0'; nav.style.padding='10px 18px';
      nav.style.background='var(--white)'; nav.style.border='1px solid var(--line)';
    }
  });
}
const cursor=document.querySelector('.cursor');
if(cursor && matchMedia('(pointer:fine)').matches){
  addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cursor.style.width='35px';cursor.style.height='35px'});
    el.addEventListener('mouseleave',()=>{cursor.style.width='18px';cursor.style.height='18px'});
  });
}
