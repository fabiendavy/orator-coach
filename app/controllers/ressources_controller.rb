class RessourcesController < ApplicationController
  def index
    if params[:query].present?
      @ressources = Ressource.where(keyword: params[:query])
    else
      @ressources = Ressource.all
    end
  end
end
