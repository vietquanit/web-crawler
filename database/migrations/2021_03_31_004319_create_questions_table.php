<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->text('name_question');
            $table->integer('mark_question')->nullable();
            $table->text('comment_question')->nullable();
            $table->text('answercomment_question')->nullable();
            $table->text('description_question')->nullable();
            $table->boolean('answer_question')->default('0');
            $table->text('title_id')->nullable();
            $table->boolean('check_answer_comment')->default('0');
            $table->boolean('active_form')->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questions');
    }
}
