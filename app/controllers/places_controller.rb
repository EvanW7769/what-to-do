class PlacesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response

    def index
        match = Place.all
        render json: match
        end

    def create
        # byebug
        place = Place.create!(place_params)
        render json: place, status: :ok
    end


    def update
        place = Place.find_by(id: params[:id])
        if place
            place.update(place_params)
            render json: place
       
       else
        render json: {error: "place not found"}, status: :not_found
           
       end
    end


    def is_liked
        place = Place.find_by(id: params[:id])
        if place
          place.update(likes: place.likes + 1)
          render json: place
        else
          render json: { error: "place not found" }, status: :not_found
        end
      end
    private

    def render_invalid_record_response(invalid)
        render json: {errors: [invalid.record.errors]}, status: :unprocessable_entity
    end

    def render_record_not_found_response(invalid)
        render json: {error: invalid}, status: :not_found
    end

        def place_params
            params.permit(:name, :address, :description, :url, :likes)
        end

end
