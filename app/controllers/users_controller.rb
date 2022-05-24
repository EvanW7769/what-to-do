class UsersController < ApplicationController
    
rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
rescue_from ActiveRecord::RecordInvalid, with: :user_unable_to_create

before_action :user_find_method, except: [:index, :create]

def index
    render json: User.all
end

def show
    user =  User.find_by( id: params[:id])
    render json: user
end


def create 

    new_user = User.create!(

        name: params[:name],
        username: params[:username],
        email: params[:email],
        password: params[:password]

    )

    if new_user.valid?
        render json: new_user
    else 
        render json: {errors: new_user.errors.full_messages}
        # user_unable_to_create(new_user)
    end
end


def update 
    user =  User.find_by( id: params[:id])
    if user.update(user_params)
        render json: user
    else
        render json:{errors: user.errors.full_messages}
    end
end


def destroy 
    user =  User.find_by( id: params[:id])
    user.destroy
    render json: user.id
end
    
private

def user_find_method
    user_to_find = User.find_by( id: params[:id] )
end

def user_params
    params.permit(:name, :username, :email, :password)
end

def user_not_found
    render json: {message: 'User not found'}
end

def user_unable_to_create (the_invaild_user_exception)
    render json: {errors: the_invaild_user_exception.record.errors.full_messages}
end



end
