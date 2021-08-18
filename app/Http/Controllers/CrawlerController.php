<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \stdClass;
//Add goutte for scrapeData
use Goutte\Client;
use Symfony\Component\HttpClient\HttpClient;
use Illuminate\Support\Facades\Http;

class CrawlerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $url = 'https://www.abc-mart.net';
        $client = new Client(HttpClient::create(['timeout' => 60]));
        $crawler = $client->request('GET', $url);
        
        $GLOBALS['arrayData'] = array(
            'img_main'=> $crawler->filter('#top-pc-all-big img')->attr('src'),
            'img_sub'=> array()
        );
        $GLOBALS['img_sub'] = array();
        $crawler->filter('.mv-wrap-sub')->each(function($frame){
            array_push($GLOBALS['img_sub'], $frame->filter('img')->attr('src'));
        });

        //Push to array data
        $GLOBALS['arrayData']['img_sub'] = $GLOBALS['img_sub'];
        
        // $crawler->filter('#main-nav .mv')->each(function($frame){
        //     // $arrayElement = array();
        //     $object = new stdClass;
        //     $object->img_main = $frame;
        //     array_push($GLOBALS['arrayData'], $object);
        // });
        // return response()->json($GLOBALS['arrayData']);

        return json_encode($GLOBALS['arrayData']);
    }
    //Call api when enter key in search input
    public function search($key)
    {
        $url = 'https://www.abc-mart.net/shop/goods/search.aspx?keyword='.$key;
        $client = new Client(HttpClient::create(['timeout' => 60]));
        $crawler = $client->request('GET', $url);
        $GLOBALS['arrayData'] = array();
        
        $crawler->filter('.StyleT_Item_Link_')->each(function($frame){
            // $arrayElement = array();
            $object = new stdClass;
            $object->name = $frame->filter('.name2_')->count()>0 ? $frame->filter('.name2_')->text() : '';
            $object->sex = $frame->filter('.goods-content_gender')->count() > 0 ? $frame->filter('.goods-content_gender')->text() : '';
            $object->price = $frame->filter('.price_')->count() > 0 ?$frame->filter('.price_')->text(): '';
            $object->red_price = $frame->filter('.goods-content_price-red')->count() > 0 ?$frame->filter('.goods-content_price-red')->text(): $object->price;
            $object->strike_price = $frame->filter('.goods-content_price-strike')->count() > 0 ? $frame->filter('.goods-content_price-strike')->text() : '';
            $object->goods_content_off = $frame->filter('.goods-content_off')->count() > 0 ? $frame->filter('.goods-content_off')->text() : '0%';
            $object->brand = $frame->filter('.name1_')->count() > 0 ? $frame->filter('.name1_')->text() : '';
            $object->link = $frame->attr('href');
            $object->img = $frame->filter('img')->attr('data-src');
            array_push($GLOBALS['arrayData'], $object);
        });

        // return pagination
        $total_page = $crawler->filter('.navipage_last_ a')->attr('value');
        // return response()->json($GLOBALS['arrayData']);
        return array('data'=>$GLOBALS['arrayData'], 'total_page'=> $total_page);
    }

    public function changePage($key, $current_page){
        $url = 'https://www.abc-mart.net/shop/goods/search.aspx?keyword='.$key.'&p='.$current_page;
        $client = new Client(HttpClient::create(['timeout' => 60]));
        $crawler = $client->request('GET', $url);
        $GLOBALS['arrayData'] = array();
        
        $crawler->filter('.StyleT_Item_Link_')->each(function($frame){
            // $arrayElement = array();
            $object = new stdClass;
            $object->name = $frame->filter('.name2_')->count()>0 ? $frame->filter('.name2_')->text() : '';
            $object->sex = $frame->filter('.goods-content_gender')->count() > 0 ? $frame->filter('.goods-content_gender')->text() : '';
            $object->price = $frame->filter('.price_')->count() > 0 ?$frame->filter('.price_')->text(): '';
            $object->red_price = $frame->filter('.goods-content_price-red')->count() > 0 ?$frame->filter('.goods-content_price-red')->text(): $object->price;
            $object->strike_price = $frame->filter('.goods-content_price-strike')->count() > 0 ? $frame->filter('.goods-content_price-strike')->text() : '';
            $object->goods_content_off = $frame->filter('.goods-content_off')->count() > 0 ? $frame->filter('.goods-content_off')->text() : '0%';
            $object->brand = $frame->filter('.name1_')->count() > 0 ? $frame->filter('.name1_')->text() : '';
            $object->link = $frame->attr('href');
            $object->img = $frame->filter('img')->attr('data-src');
            array_push($GLOBALS['arrayData'], $object);
        });

        // return pagination
        $total_page = $crawler->filter('.navipage_last_ a')->attr('value');
        // return response()->json($GLOBALS['arrayData']);
        return array('data'=>$GLOBALS['arrayData'], 'total_page'=> $total_page);
    }

    //Show detail page
    public function detailProduct(Request $request){
        $url = $request->input('link');
        $client = new Client(HttpClient::create(['timeout' => 60]));
        $crawler = $client->request('GET', $url);
        $GLOBALS['arrayData'] = array();

        $crawler->filter('.choosed_size_list dl')->each(function($frame){
            $object = new stdClass;
            $object->size = $frame->filter('dt')->text();
            $object->cart = $frame->filter('.js-add-cart')->count() > 0 ? 'Còn hàng' : 'Hết hàng';
            array_push($GLOBALS['arrayData'], $object);
        });

        return json_encode($GLOBALS['arrayData']);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
