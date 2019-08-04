class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(id: params[:id])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Incorrect email or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["No user logged in"], status: 404
    end
  end
end
