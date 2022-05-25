class User < ApplicationRecord
    has_many :matches
    has_many :places, through: :matches

    has_secure_password

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze
    validates :name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    validates :email, presence: true, uniqueness: true, length: { minimum: 10, maximum: 255 },format: { with: VALID_EMAIL_REGEX }

end
