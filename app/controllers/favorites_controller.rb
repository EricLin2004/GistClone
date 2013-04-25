class FavoritesController < ApplicationController
  respond_to :json
  respond_to :html

  def index
    @favorites = User.find(session[:user_id]).favorites

    respond_to do |format|
      format.json { render :json => @favorites }
      format.html { render :index }
    end
  end

  def destroy
    Favorite.find(params[:id]).destroy
    render :json => params[:id]
  end

  def create
    @favorite = Favorite.new(:gist_id => params[:gist_id],
        :user_id => session[:user_id])
    @favorite.save!
    render :json => @favorite
  end
end
