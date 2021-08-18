<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    use HasFactory;
    protected $fillable = [ 'name_title', 'description_title', 'form_id','active_title'];
    public function forms() {
        return $this->belongsTo('App\Forms');
    }
}
