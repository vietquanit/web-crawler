<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssignsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assigns', function (Blueprint $table) {
            $table->id();
            $table->string('name_assign')->default('');
            $table->text('description_assign')->nullable();
            $table->integer('form_id');
            $table->integer('user_id');
            $table->integer('month_assign');
            $table->integer('year_assign');
            $table->boolean('check_assigned')->default('0');
            $table->integer('score_questions_assign')->default('0');
            $table->integer('score_questions_correct_assign')->default('0');
            $table->boolean('active_assign')->default('0');
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
        Schema::dropIfExists('assigns');
    }
}
