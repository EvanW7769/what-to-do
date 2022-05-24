class SessionController < ApplicationController

    include ActionController::Cookies

    def create
      user = User.find_by(username: params[:username])
      # finds existing user, checks to see if user can be authenticated
      if user.present? && user.authenticate(params[:password])
      # sets up user.id sessions
        session[:user_id] = user.id
        render json: user, status: :ok
        # redirect_to root_path, notice: 'Logged in successfully'
      else
        # flash.now[:alert] = 'Invalid email or password'
        render json: {error: 'Invalid username or password'}, status: :unauthorized
      end
    end

    # def create

    #   user_to_find_to_login = User.find_by( username: params[:username] ).try(:authenticate, params["username"]["password"])

    #   if user_to_find_to_login  
    #     session[:user_id] = user.id
    #     render json: user_to_find_to_login
        
    #   else
    #     render json: { status: "error", message: "Username or Password does not match." }, status: :unprocessable_entity
    #   end
    # end


  #   def create
       
  #     user=User.find_by_email(username: session_params[:email])
  #     # byebug
  #         if user && authenticate(params[:password])
  #             session[:user_id] =user.id
  #             # profile_img=rails_blob_path(user.profile_img)

  #             render json: user, status: :ok
  #         else 
  #             render json: {error: "Invalid email or password."}, status: :unauthorized
  #         end
  # end




    def destroy
    
    session.delete(:user_id)

    render json:{}




    end


    def get_logged_in_user

        # byebug    
        user_already_loggedin = User.find_by(id: session[:user_id])
        
        render json: user_already_loggedin

    end
 
private 
    def session_params
      params.require(:user).permit(:username, :password)
    end
end
