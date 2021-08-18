<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assign extends Model
{
    use HasFactory;
    protected $fillable = ['name_assign', 'description_assign', 'form_id', 'user_id', 'month_assign', 'check_assigned' ,'year_assign','active_assign','score_questions_assign', 'score_questions_correct_assign'];
}
