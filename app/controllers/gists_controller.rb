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

  def create
    params[:model][:user_id] = session[:user_id]
    params[:model][:gist_files_attributes] = params[:model][:gistFiles]
    params[:model].delete(:gistFiles)

    @gist = Gist.new(params[:model])
    @gist.save!
    redirect_to gists_url
  end
end
