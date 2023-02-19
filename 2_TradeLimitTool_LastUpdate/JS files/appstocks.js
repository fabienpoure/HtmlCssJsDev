//--------------------------------------------------------------
//
// Adress page DJI
//
//      https://edition.cnn.com/markets
//
// Block avec valeur du DJI
//
//         <div 
//               class="index-card__value-2rvjuz title cnn-pcl-17deefz"
//         >
//         33,765.00
//         </div>
//
// Tutoriel JQuery
//
//      https://www.scrapingbee.com/blog/html-parsing-jquery/
//
//--------------------------------------------------------------

$.get('https://edition.cnn.com/markets', function(html) {

    $(html).find(".index-card__value-2rvjuz title cnn-pcl-17deefz").each(function() 
    {

        alert($(this).text());
     
    });

});

// $.get('https://fr.finance.yahoo.com/quote/%5EDJI?p=%5EDJI').then
//
//     (function (html) 
//         {
//             var $dji = $(html).find('Fw(b) Fz(36px) Mb(-4px) D(ib)');
//             document.write($dji.html());
//
//         }
//     , 
//     function () 
//         {
//             document.write('Access denied');
//         }
//     );
//