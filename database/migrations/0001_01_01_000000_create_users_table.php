<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();                           // Benzersiz kullanıcı ID'si
            $table->string('name');                // Kullanıcı adı
            $table->string('email')->unique();     // Benzersiz e-posta adresi
            $table->timestamp('email_verified_at')->nullable(); // E-posta doğrulama tarihi
            $table->string('password');            // Şifre
            $table->rememberToken();               // Oturum yenileme tokenı
            $table->timestamps();                  // created_at ve updated_at alanları
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
