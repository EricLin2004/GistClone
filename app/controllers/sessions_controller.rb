class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_user_name(params[:user][:user_name])
    if @user
      session[:user_id] = @user.id
      redirect_to gists_url
    else
      redirect_to new_session_url
    end
  end

  def destroy
    @user = User.find(session[:user_id])
    session[:user_id] = nil
    redirect_to new_session_url
  end
end
