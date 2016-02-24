window.onload = init;

function init(){
    document.getElementById('chatlink').onclick = function(){ PopUpWindow('/chat/chatroom.asp', 709,481); return false; }
}

function PopUpWindow(loc,w,h) {
    var winl = (screen.width - w) / 2;
    var wint = (screen.height - h) / 2;
    window.open(loc, 'ChatWindow', 'toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=1,width=700,height=460,top='+wint+',left='+winl)
}