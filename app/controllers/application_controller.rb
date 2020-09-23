class ApplicationController < ActionController::Base

    ## do i need helper methods??
    
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        session[:session_token] = @current_user.reset_session_token! 
    end

    def logout!
        current_user.reset_session_token!
        current_user = nil
        session[:session_token] = nil 
    end

    def ensure_logged_in 
        redirect_to new_session_url unless logged_in?
    end
end
