class Api::UsersController < ApplicationController

  def new

  end

  def create

    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
  end

  private
  def user_params
   params.require(:user).permit(:password, :image_url, :email, :firstname, :lastname);
 end

end
