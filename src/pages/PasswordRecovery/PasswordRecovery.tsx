import { ChangePasswordLayout } from "@/ui/molecules/ChangePasswordLayout";
import './password_recovery.css';

export const PasswordRecovery = () => {
  return (
    <div className="container-password-reset">
      <div>
        <div className="container-header">
          <h2>Logo - NiftyTab</h2>
        </div>

        <ChangePasswordLayout />
      </div>
    </div>
  )
};
