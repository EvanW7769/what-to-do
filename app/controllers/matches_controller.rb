class MatchesController < ApplicationController

    def index
    current_users_matches = User.find_by(id: (session[:user_id]))
    # current_users_matches.matches
    # Match.all.each(:user_id (session[:user_id]))
    # byebug
    render json: current_users_matches.matches
    end

    def update
        match = Match.find_by(id: params[:id])
        if bird
          bird.update(bird_params)
          render json: bird
        else
          render json: { error: "Bird not found" }, status: :not_found
        end
      end

      def destroy
        matchToDestroy = Match.find_by{params[:id]}
        matchToDestroy.destroy
        render json: {message: "delete successful"}, status: :ok
      
      end
      
      def create
        match = Match.create(match_create_params)
        if match.valid?
          render json: match
        else
          render json: {'error': match.errors.full_messages}
        end
      end

      def delete_match
         the_match = Match.find(params[:id])
         the_match.destroy
         render json: the_match

      end

      private 

      def match_create_params 
        params.require(:match).permit(:place_id, :user_id)
      end

end
