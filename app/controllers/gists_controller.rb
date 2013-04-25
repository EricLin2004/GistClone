class GistsController < ApplicationController
  respond_to :json
  respond_to :html

  def index
    @gists = User.find(session[:user_id]).gists
    @favorites = User.find(session[:user_id]).favorites

    respond_to do |format|
      format.json { render :json => @gists }
      format.html { render :index }
    end
  end
end
