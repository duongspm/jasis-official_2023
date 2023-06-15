// JavaScript Document

$(function(){
  cookie_agree();
});

function cookie_agree() {  
  let timelimit_string = localStorage.getItem('timelimit2022');
  let timelimit_num = parseFloat(timelimit_string);
  //console.log('プライバシーポリシーへの同意期限は'+timelimit_string+'です。');
  let today = new Date();
  let today_string = String( today.getFullYear() ) + String( ( '0' + (today.getMonth()+1) ).slice(-2) ) + String( ( '0' + today.getDate() ).slice(-2) ) ;
  //console.log('今日は' + today_string + 'です。');
  let today_num = parseFloat(today_string);
  if ( today_num >= timelimit_num ) {
    console.log('同意期限が過ぎています');
    cookie_agree_on()
  } else if ( !timelimit_num ) {
    console.log('同意されていません。');
    cookie_agree_on()
  } else {
    console.log('同意期限内です。');
  }
}
function cookie_agree_on() {
  console.log('クッキーの使用に関して同意が得られていない、または同意期限を過ぎています。プライバシーポリシーをご確認の上、クッキーの使用を制限する場合にはブラウザにて所定の設定を更新ください。');
  $('body').append(
    '<div id="agreePanel">'+
      '<div id="agree_check">'+
        '<p>当サイトでは、サイトの利便性向上や使用状況の分析を目的にクッキーを使用します。サイトを閲覧いただく際にはクッキーの使用に同意いただく必要があります。詳しくは'+
        '<a href="' + 'https://www.jasis.jp/privacy/' +'">'+
        'JASISプライバシーポリシー'+
        '</a>'+
        'をご覧ください。</p>'+
        '<button id="agree_ok">同意する</button>'+
      '</div>'+
    '</div>'
  );
  $('body').append(
    '<style>'+
    '#agreePanel { position:fixed; left:0; bottom:0; z-index:99999999; width:100%; background:rgba(0,0,0,0.8); box-sizing:border-box; font-size:16px; }'+
    '#agreePanel #agree_check { position:relative; padding:1.5em 9em 1.5em 1em }'+
    '#agreePanel p { font-size:100%; display:block; color:#fff; line-height:1.5; font-size:100%; }'+
    '#agreePanel p a { color:#288eec; text-decoration:underline;}'+
    '#agreePanel p a:hover { color:#ccc; text-decoration:none;}'+
    '#agreePanel button { background:#288eec; color:#fff; outline:none; padding:1em 0; display:block; text-align:center; font-size:100%; position:absolute; right:1em; top:50%; transform:translateY(-50%); width:7em; border:none; line-height:1.2;}'+
    '#agreePanel button:hover { background:#ccc; color:#fff; }'+
    '@media screen and ( max-width:767px) {'+
      '#agreePanel { font-size:12px; }'+
      '#agreePanel #agree_check { padding:1em;}'+
      '#agreePanel button { position:static; left:auto; top:auto; margin:0 auto; width:100%; transform:translateY(0);}'+
      '#agreePanel p { margin:0 0 10px 0; }'+
    '}'+
    '</style>'            
  );
}

function cookie_agree_off() {
  $('#agreePanel').remove();
}
function cookie_agree_date() {
  let today = new Date();　
  let timelimit = new Date();
  //console.log(today);
  　
  // 30日後の日付を取得
  timelimit.setDate(timelimit.getDate() + 30);
  //console.log(timelimit);
  
  let today_string = String( today.getFullYear() ) + String( ( '0' + (today.getMonth()+1) ).slice(-2) ) + String( ( '0' + today.getDate() ).slice(-2) ) ;
  //console.log(today_string);
  
  let timelimit_string = String( timelimit.getFullYear() ) + String( ( '0' + (timelimit.getMonth()+1) ).slice(-2) ) + String( ( '0' + timelimit.getDate() ).slice(-2) ) ;
  //console.log(timelimit_string);
  localStorage.setItem('timelimit2022',timelimit_string);
}

$(function(){
  $('#agree_ok').on('click',function(){
    cookie_agree_off();
    cookie_agree_date();
  });
});
