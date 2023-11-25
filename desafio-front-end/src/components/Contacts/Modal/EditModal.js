import { styled } from "styled-components";
import ReactModal from "react-modal";
import { ColorRing } from "react-loader-spinner";

export default function EditModal({openedModal, formInfo, handleForm, setOpenedModal}){
    return(
        <StyledModal
        appElement={document.getElementById("root")}
        isOpen={openedModal}
        style={customStyles}
      >
        <p>Novo contato</p>
        <Forms>

         {/* <form > */}
         <Info>
            <span>
              <p>Nome:</p>
              <input
              required
              type="name"
              value={formInfo.first_name}
              onChange={handleForm}
              />
            </span>
            <span>
              <p>Sobrenome:</p>
              <input 
              required
              type="name"
              value={formInfo.last_name}
              onChange={handleForm}
              />
            </span>
          </Info>

          <Email>
            <p>E-mail:</p>
            <input 
            required
            type="email"
            value={formInfo.email}
            onChange={handleForm}
            />
          </Email>

          <Info>
            <span>
              <p>Avatar:</p>
              <input 
              required
              type="imagem"
              value={formInfo.avatar}
              onChange={handleForm}
              />
            </span>
            <span>
              <p>Linguagem:</p>
              <input 
              required
              type="text"
              value={formInfo.language}
              onChange={handleForm}
              />
            </span>
          </Info>

          <Info>
            <span>
              <p>Data de nascimento:</p>
              <input 
              type="date"
              value={formInfo.birthday}
              onChange={handleForm}
              />
            </span>
            <span>
              <p>Gênero:</p>
              <form action="">
                <input list="Gênero" />
                <datalist id="Gênero">
                  <option value="M" />
                  <option value="F" />
                  <option value="N" />
                </datalist>
              </form>
            </span>
          </Info>
         {/* </form> */}

        </Forms>
{/* 
        {create ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={[
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
            ]}
          />
        ) : ( */}
          <div>
            <WhiteButton
              data-test="cancel"
              onClick={() => setOpenedModal(false)}
            >
              Cancelar
            </WhiteButton>
            <BlueButton data-test="confirm" onClick={() => {}}>
              Salvar
            </BlueButton>
          </div>
        {/* )} */}
      </StyledModal>
    );
};

const customStyles = {
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "35%",
      backgroundColor: "#201520",
      margin: "auto",
      borderRadius: "50px",
      padding: "20px",
  
      fontFamily: "Lexend Deca",
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "25.8px",
      color: "#FFFFFF",
      textAlign: "center",
    },
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: "2",
    },
  };
  
  const StyledModal = styled(ReactModal)`
    ${customStyles.content}
  `;
  
  const BlueButton = styled.button`
    background-color: #deba76;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16.8px;
    color: #201520;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    width: 112px;
    margin-left: 20px;
    margin-top: 25px;
  `;
  const WhiteButton = styled.button`
    background-color: white;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16.8px;
    color: #201520;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    width: 112px;
  `;
  
  const Forms = styled.div`
    display: flex;
    flex-direction: column;
    p {
      font-size: 13px;
      display: flex;
    }
  
    input {
      border-radius: 2px;
      border: none;
      outline: none;
      padding: 5px;
    }
  `;
  
  const Email = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
  `;
  
  const Info = styled.div`
    display: flex;
    align-items: center;
    span {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      padding: 10px;
    }
  
    form {
      margin-bottom: 5px;
    }
  
  `;
  
  