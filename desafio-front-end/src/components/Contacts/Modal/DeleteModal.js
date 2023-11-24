import { styled } from "styled-components";
import ReactModal from "react-modal";

export default function DeleteModal({openedModal, formInfo, handleForm, setOpenedModal}){
    return(
        <StyledModal
        appElement={document.getElementById("root")}
        isOpen={openedModal}
        style={customStyles}
      >
       <p>Deseja excluir este contato?</p>
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
            <YellowButton data-test="confirm" onClick={() => {}}>
              Salvar
            </YellowButton>
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
  
  const YellowButton = styled.button`
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
  