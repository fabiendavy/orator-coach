class RessourcesController < ApplicationController
  def index
    if params[:query].present?
      sql_query = " \
        ressources.keyword @@ :query \
        OR ressources.title @@ :query \
        OR ressources.description @@ :query \
      "
      @ressources = Ressource.where(sql_query, query: "%#{params[:query]}%")
    else
      @ressources = Ressource.all
    end
  end
end
