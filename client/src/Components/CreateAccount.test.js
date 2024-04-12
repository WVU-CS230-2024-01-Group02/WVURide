import CreateAccount from "./CreateAccount";

describe("CreateAccount Component", () => {

    //Test ensures component renders correctly and does not crash
    it("loads successfully", () =>{
        render(<CreateAccount/>);
    });

    //Shows invalid input
    it('displays error messages for invalid input', async () => {
        render(<CreateAccount />);
    
        fireEvent.click(screen.getByText('Create Your Account'));

        await waitFor(() => {
          expect(screen.getByText('Invalid email')).toBeInTheDocument();
          expect(screen.getByText('Invalid password')).toBeInTheDocument();
          expect(screen.getByText('Invalid name')).toBeInTheDocument();
          expect(screen.getByText('Invalid username')).toBeInTheDocument();
        });
      });

      it("displays error for not matching passwords", async () => {
        render(<CreateAccount />);
    
        fireEvent.change(screen.getByPlaceholderText('Mix Email'), {
          target: { value: 'test@mix.wvu.edu' },
        });
        fireEvent.change(screen.getByPlaceholderText('Password'), {
          target: { value: 'testpassword' },
        });
        fireEvent.change(screen.getByPlaceholderText('Confirm your password'), {
          target: { value: 'testdifferentpassword' },
        });
        fireEvent.click(screen.getByText('Create Your Account'));
    
        await waitFor(() => {
          expect(screen.getByText('Invalid password')).toBeInTheDocument();
        });
      });
});

