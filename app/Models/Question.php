<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = [ 'name_question', 'mark_question','comment_question','answercomment_question','description_question','title_id','active_question','answer_question'];
    public function questions() {
        return $this->belongstoMany('App\Title','id');
    }
}
