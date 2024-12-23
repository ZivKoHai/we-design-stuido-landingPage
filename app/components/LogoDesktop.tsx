export default function LogoDesktop({
  size = 216,
  className,
  color = "#F4EFE9",
}: {
  size?: number;
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size / 2}
      viewBox="0 0 216 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.2666 1.08C20.9866 1.08 21.5866 1.056 22.0666 1.008V1.488C21.1706 1.696 20.5386 2.392 20.1706 3.576L15.6346 18.12H15.4426H15.2506L11.0746 5.76L7.25859 18.12H7.06659H6.87459L1.78659 3.024C1.45059 2.032 0.898592 1.52 0.130592 1.488V1.008C0.786592 1.056 1.64259 1.08 2.69859 1.08C3.85059 1.08 4.71459 1.056 5.29059 1.008V1.488C4.85859 1.52 4.55459 1.6 4.37859 1.728C4.20259 1.856 4.11459 2.056 4.11459 2.328C4.11459 2.584 4.20259 2.976 4.37859 3.504L7.88259 14.208L10.8106 4.92L10.1626 3.024C9.84259 2.032 9.37059 1.52 8.74659 1.488V1.008C9.32259 1.056 10.0986 1.08 11.0746 1.08C12.4506 1.08 13.4746 1.056 14.1466 1.008V1.488C13.5386 1.52 13.1146 1.592 12.8746 1.704C12.6346 1.8 12.5146 2.016 12.5146 2.352C12.5146 2.64 12.5946 3.024 12.7546 3.504L16.2106 14.184L19.1626 4.896C19.4186 4.112 19.5466 3.464 19.5466 2.952C19.5466 2.424 19.3866 2.056 19.0666 1.848C18.7466 1.624 18.2266 1.504 17.5066 1.488V1.008C18.4186 1.056 19.3386 1.08 20.2666 1.08ZM34.1212 14.928C34.1212 15.84 34.1772 16.864 34.2892 18C33.2012 17.952 31.3692 17.928 28.7932 17.928C25.7212 17.928 23.4012 17.952 21.8332 18V17.52C22.4092 17.488 22.8252 17.424 23.0812 17.328C23.3532 17.232 23.5372 17.048 23.6332 16.776C23.7292 16.504 23.7772 16.064 23.7772 15.456V3.552C23.7772 2.944 23.7292 2.504 23.6332 2.232C23.5372 1.96 23.3532 1.776 23.0812 1.68C22.8252 1.584 22.4092 1.52 21.8332 1.488V1.008C23.4012 1.056 25.7212 1.08 28.7932 1.08C31.1452 1.08 32.8172 1.056 33.8092 1.008C33.6972 2.064 33.6412 3.008 33.6412 3.84C33.6412 4.464 33.6652 4.96 33.7132 5.328H33.1612C33.0492 4.288 32.9052 3.52 32.7292 3.024C32.5532 2.512 32.2572 2.144 31.8412 1.92C31.4252 1.68 30.7932 1.56 29.9452 1.56H27.9532C27.3772 1.56 26.9532 1.608 26.6812 1.704C26.4252 1.784 26.2492 1.96 26.1532 2.232C26.0572 2.504 26.0092 2.944 26.0092 3.552V9.216H27.5932C28.1532 9.216 28.5852 9.088 28.8892 8.832C29.1932 8.56 29.3932 8.248 29.4892 7.896C29.6012 7.528 29.6892 7.072 29.7532 6.528L29.8252 6.048H30.3772C30.3292 6.72 30.3052 7.472 30.3052 8.304V9.456C30.3052 10.272 30.3532 11.408 30.4492 12.864H29.8972C29.8812 12.752 29.8332 12.368 29.7532 11.712C29.6732 11.04 29.4492 10.536 29.0812 10.2C28.7292 9.864 28.2332 9.696 27.5932 9.696H26.0092V15.456C26.0092 16.064 26.0572 16.504 26.1532 16.776C26.2492 17.048 26.4252 17.232 26.6812 17.328C26.9532 17.408 27.3772 17.448 27.9532 17.448H29.7052C30.6972 17.448 31.4492 17.32 31.9612 17.064C32.4892 16.792 32.8732 16.368 33.1132 15.792C33.3532 15.2 33.5292 14.336 33.6412 13.2H34.1932C34.1452 13.632 34.1212 14.208 34.1212 14.928ZM46.5867 1.008C49.4187 1.008 51.5387 1.72 52.9467 3.144C54.3547 4.552 55.0587 6.608 55.0587 9.312C55.0587 11.056 54.7147 12.584 54.0267 13.896C53.3387 15.208 52.3387 16.224 51.0267 16.944C49.7307 17.648 48.1787 18 46.3707 18L44.9787 17.976C44.0827 17.944 43.4267 17.928 43.0107 17.928C41.6987 17.928 40.7067 17.952 40.0347 18V17.52C40.6107 17.488 41.0267 17.424 41.2827 17.328C41.5547 17.232 41.7387 17.048 41.8347 16.776C41.9307 16.504 41.9787 16.064 41.9787 15.456V3.552C41.9787 2.944 41.9307 2.504 41.8347 2.232C41.7387 1.96 41.5547 1.776 41.2827 1.68C41.0267 1.584 40.6107 1.52 40.0347 1.488V1.008C40.5947 1.056 41.3707 1.08 42.3627 1.08L44.4027 1.056C45.4907 1.024 46.2187 1.008 46.5867 1.008ZM45.9867 1.44C45.4907 1.44 45.1147 1.496 44.8587 1.608C44.6187 1.72 44.4507 1.92 44.3547 2.208C44.2587 2.496 44.2107 2.928 44.2107 3.504V15.504C44.2107 16.08 44.2587 16.512 44.3547 16.8C44.4507 17.088 44.6187 17.288 44.8587 17.4C45.1147 17.512 45.4987 17.568 46.0107 17.568C47.7067 17.568 49.0427 17.264 50.0187 16.656C50.9947 16.032 51.6747 15.128 52.0587 13.944C52.4587 12.76 52.6587 11.248 52.6587 9.408C52.6587 7.568 52.4427 6.072 52.0107 4.92C51.5787 3.752 50.8747 2.88 49.8987 2.304C48.9387 1.728 47.6347 1.44 45.9867 1.44ZM70.1755 14.928C70.1755 15.84 70.2315 16.864 70.3435 18C69.2555 17.952 67.4235 17.928 64.8475 17.928C61.7755 17.928 59.4555 17.952 57.8875 18V17.52C58.4635 17.488 58.8795 17.424 59.1355 17.328C59.4075 17.232 59.5915 17.048 59.6875 16.776C59.7835 16.504 59.8315 16.064 59.8315 15.456V3.552C59.8315 2.944 59.7835 2.504 59.6875 2.232C59.5915 1.96 59.4075 1.776 59.1355 1.68C58.8795 1.584 58.4635 1.52 57.8875 1.488V1.008C59.4555 1.056 61.7755 1.08 64.8475 1.08C67.1995 1.08 68.8715 1.056 69.8635 1.008C69.7515 2.064 69.6955 3.008 69.6955 3.84C69.6955 4.464 69.7195 4.96 69.7675 5.328H69.2155C69.1035 4.288 68.9595 3.52 68.7835 3.024C68.6075 2.512 68.3115 2.144 67.8955 1.92C67.4795 1.68 66.8475 1.56 65.9995 1.56H64.0075C63.4315 1.56 63.0075 1.608 62.7355 1.704C62.4795 1.784 62.3035 1.96 62.2075 2.232C62.1115 2.504 62.0635 2.944 62.0635 3.552V9.216H63.6475C64.2075 9.216 64.6395 9.088 64.9435 8.832C65.2475 8.56 65.4475 8.248 65.5435 7.896C65.6555 7.528 65.7435 7.072 65.8075 6.528L65.8795 6.048H66.4315C66.3835 6.72 66.3595 7.472 66.3595 8.304V9.456C66.3595 10.272 66.4075 11.408 66.5035 12.864H65.9515C65.9355 12.752 65.8875 12.368 65.8075 11.712C65.7275 11.04 65.5035 10.536 65.1355 10.2C64.7835 9.864 64.2875 9.696 63.6475 9.696H62.0635V15.456C62.0635 16.064 62.1115 16.504 62.2075 16.776C62.3035 17.048 62.4795 17.232 62.7355 17.328C63.0075 17.408 63.4315 17.448 64.0075 17.448H65.7595C66.7515 17.448 67.5035 17.32 68.0155 17.064C68.5435 16.792 68.9275 16.368 69.1675 15.792C69.4075 15.2 69.5835 14.336 69.6955 13.2H70.2475C70.1995 13.632 70.1755 14.208 70.1755 14.928ZM78.3685 0.743999C79.0725 0.743999 79.6245 0.823999 80.0245 0.983999C80.4405 1.128 80.8645 1.344 81.2965 1.632C81.6485 1.856 81.9205 1.968 82.1125 1.968C82.2565 1.968 82.3685 1.888 82.4485 1.728C82.5285 1.552 82.5925 1.28 82.6405 0.912H83.1925C83.1125 1.84 83.0725 3.472 83.0725 5.808H82.5205C82.4245 4.512 82.0485 3.424 81.3925 2.544C80.7525 1.648 79.8165 1.2 78.5845 1.2C77.7205 1.2 77.0165 1.464 76.4725 1.992C75.9285 2.504 75.6565 3.168 75.6565 3.984C75.6565 4.592 75.7925 5.12 76.0645 5.568C76.3525 6.016 76.7125 6.4 77.1445 6.72C77.5765 7.04 78.1925 7.448 78.9925 7.944L79.6885 8.376C80.6965 9 81.4885 9.552 82.0645 10.032C82.6565 10.496 83.1285 11.032 83.4805 11.64C83.8325 12.248 84.0085 12.96 84.0085 13.776C84.0085 15.232 83.5285 16.36 82.5685 17.16C81.6085 17.944 80.3925 18.336 78.9205 18.336C78.1525 18.336 77.5205 18.256 77.0245 18.096C76.5445 17.936 76.0805 17.72 75.6325 17.448C75.2805 17.224 75.0085 17.112 74.8165 17.112C74.6725 17.112 74.5605 17.2 74.4805 17.376C74.4005 17.536 74.3365 17.8 74.2885 18.168H73.7365C73.8005 17.288 73.8325 15.368 73.8325 12.408H74.3845C74.4965 14.024 74.8965 15.336 75.5845 16.344C76.2725 17.352 77.3285 17.856 78.7525 17.856C79.6165 17.856 80.3525 17.592 80.9605 17.064C81.5685 16.52 81.8725 15.72 81.8725 14.664C81.8725 13.768 81.5685 13.008 80.9605 12.384C80.3685 11.76 79.4245 11.056 78.1285 10.272C77.1845 9.696 76.4165 9.184 75.8245 8.736C75.2485 8.288 74.7765 7.752 74.4085 7.128C74.0405 6.488 73.8565 5.744 73.8565 4.896C73.8565 3.552 74.2885 2.528 75.1525 1.824C76.0165 1.104 77.0885 0.743999 78.3685 0.743999ZM93.0335 1.488C92.4575 1.52 92.0335 1.584 91.7615 1.68C91.5055 1.776 91.3295 1.96 91.2335 2.232C91.1375 2.504 91.0895 2.944 91.0895 3.552V15.456C91.0895 16.064 91.1375 16.504 91.2335 16.776C91.3295 17.048 91.5055 17.232 91.7615 17.328C92.0335 17.424 92.4575 17.488 93.0335 17.52V18C92.2975 17.952 91.2815 17.928 89.9855 17.928C88.6095 17.928 87.5855 17.952 86.9135 18V17.52C87.4895 17.488 87.9055 17.424 88.1615 17.328C88.4335 17.232 88.6175 17.048 88.7135 16.776C88.8095 16.504 88.8575 16.064 88.8575 15.456V3.552C88.8575 2.944 88.8095 2.504 88.7135 2.232C88.6175 1.96 88.4335 1.776 88.1615 1.68C87.9055 1.584 87.4895 1.52 86.9135 1.488V1.008C87.5855 1.056 88.6095 1.08 89.9855 1.08C91.2655 1.08 92.2815 1.056 93.0335 1.008V1.488ZM103.595 0.671999C104.539 0.671999 105.315 0.807999 105.923 1.08C106.531 1.336 107.195 1.72 107.915 2.232C108.123 2.392 108.283 2.472 108.395 2.472C108.699 2.472 108.899 1.984 108.995 1.008H109.547C109.483 2.048 109.451 3.888 109.451 6.528H108.899C108.755 5.68 108.603 4.984 108.443 4.44C108.283 3.88 108.035 3.392 107.699 2.976C107.235 2.4 106.627 1.944 105.875 1.608C105.139 1.272 104.363 1.104 103.547 1.104C102.491 1.104 101.563 1.448 100.763 2.136C99.9628 2.824 99.3468 3.808 98.9148 5.088C98.4828 6.352 98.2668 7.832 98.2668 9.528C98.2668 12.408 98.7228 14.52 99.6348 15.864C100.563 17.192 102.011 17.856 103.979 17.856C104.939 17.856 105.771 17.608 106.475 17.112C106.763 16.92 106.947 16.736 107.027 16.56C107.123 16.368 107.171 16.112 107.171 15.792V13.488C107.171 12.816 107.107 12.328 106.979 12.024C106.851 11.72 106.627 11.512 106.307 11.4C105.987 11.288 105.467 11.216 104.747 11.184V10.704C105.579 10.752 106.707 10.776 108.131 10.776C109.219 10.776 110.051 10.752 110.627 10.704V11.184C110.259 11.216 109.987 11.28 109.811 11.376C109.651 11.472 109.539 11.656 109.475 11.928C109.427 12.2 109.403 12.64 109.403 13.248V18H108.923C108.907 17.68 108.843 17.376 108.731 17.088C108.619 16.784 108.467 16.632 108.275 16.632C108.179 16.632 108.083 16.656 107.987 16.704C107.891 16.752 107.723 16.864 107.483 17.04C106.923 17.472 106.339 17.792 105.731 18C105.139 18.224 104.475 18.336 103.739 18.336C102.091 18.336 100.675 18 99.4908 17.328C98.3228 16.64 97.4268 15.656 96.8028 14.376C96.1788 13.096 95.8668 11.568 95.8668 9.792C95.8668 7.968 96.1948 6.368 96.8508 4.992C97.5228 3.6 98.4428 2.536 99.6108 1.8C100.779 1.048 102.107 0.671999 103.595 0.671999ZM128.246 1.488C127.686 1.52 127.27 1.608 126.998 1.752C126.726 1.88 126.542 2.104 126.446 2.424C126.35 2.728 126.302 3.184 126.302 3.792V18.12H125.75L115.67 2.544V15.216C115.67 15.84 115.718 16.304 115.814 16.608C115.926 16.912 116.134 17.136 116.438 17.28C116.742 17.408 117.214 17.488 117.854 17.52V18C117.278 17.952 116.462 17.928 115.406 17.928C114.446 17.928 113.702 17.952 113.174 18V17.52C113.734 17.488 114.15 17.408 114.422 17.28C114.694 17.136 114.878 16.912 114.974 16.608C115.07 16.288 115.118 15.824 115.118 15.216V3.552C115.118 2.944 115.07 2.504 114.974 2.232C114.878 1.96 114.694 1.776 114.422 1.68C114.166 1.584 113.75 1.52 113.174 1.488V1.008C113.702 1.056 114.446 1.08 115.406 1.08C116.126 1.08 116.75 1.056 117.278 1.008L125.75 14.064V3.792C125.75 3.168 125.694 2.704 125.582 2.4C125.486 2.096 125.286 1.88 124.982 1.752C124.678 1.608 124.206 1.52 123.566 1.488V1.008C124.142 1.056 124.958 1.08 126.014 1.08C126.974 1.08 127.718 1.056 128.246 1.008V1.488ZM140.752 0.743999C141.456 0.743999 142.008 0.823999 142.408 0.983999C142.824 1.128 143.248 1.344 143.68 1.632C144.032 1.856 144.304 1.968 144.496 1.968C144.64 1.968 144.752 1.888 144.832 1.728C144.912 1.552 144.976 1.28 145.024 0.912H145.576C145.496 1.84 145.456 3.472 145.456 5.808H144.904C144.808 4.512 144.432 3.424 143.776 2.544C143.136 1.648 142.2 1.2 140.968 1.2C140.104 1.2 139.4 1.464 138.856 1.992C138.312 2.504 138.04 3.168 138.04 3.984C138.04 4.592 138.176 5.12 138.448 5.568C138.736 6.016 139.096 6.4 139.528 6.72C139.96 7.04 140.576 7.448 141.376 7.944L142.072 8.376C143.08 9 143.872 9.552 144.448 10.032C145.04 10.496 145.512 11.032 145.864 11.64C146.216 12.248 146.392 12.96 146.392 13.776C146.392 15.232 145.912 16.36 144.952 17.16C143.992 17.944 142.776 18.336 141.304 18.336C140.536 18.336 139.904 18.256 139.408 18.096C138.928 17.936 138.464 17.72 138.016 17.448C137.664 17.224 137.392 17.112 137.2 17.112C137.056 17.112 136.944 17.2 136.864 17.376C136.784 17.536 136.72 17.8 136.672 18.168H136.12C136.184 17.288 136.216 15.368 136.216 12.408H136.768C136.88 14.024 137.28 15.336 137.968 16.344C138.656 17.352 139.712 17.856 141.136 17.856C142 17.856 142.736 17.592 143.344 17.064C143.952 16.52 144.256 15.72 144.256 14.664C144.256 13.768 143.952 13.008 143.344 12.384C142.752 11.76 141.808 11.056 140.512 10.272C139.568 9.696 138.8 9.184 138.208 8.736C137.632 8.288 137.16 7.752 136.792 7.128C136.424 6.488 136.24 5.744 136.24 4.896C136.24 3.552 136.672 2.528 137.536 1.824C138.4 1.104 139.472 0.743999 140.752 0.743999ZM160.577 1.008C160.465 2.144 160.409 3.168 160.409 4.08C160.409 4.88 160.433 5.536 160.481 6.048H159.929C159.801 4.816 159.641 3.904 159.449 3.312C159.257 2.704 158.921 2.264 158.441 1.992C157.961 1.704 157.225 1.56 156.233 1.56H154.937V15.216C154.937 15.888 155.001 16.376 155.129 16.68C155.257 16.984 155.481 17.192 155.801 17.304C156.121 17.416 156.641 17.488 157.361 17.52V18C156.529 17.952 155.353 17.928 153.833 17.928C152.233 17.928 151.049 17.952 150.281 18V17.52C151.001 17.488 151.521 17.416 151.841 17.304C152.161 17.192 152.385 16.984 152.513 16.68C152.641 16.376 152.705 15.888 152.705 15.216V1.56H151.409C150.417 1.56 149.681 1.704 149.201 1.992C148.721 2.264 148.385 2.704 148.193 3.312C148.001 3.904 147.841 4.816 147.713 6.048H147.161C147.209 5.536 147.233 4.88 147.233 4.08C147.233 3.168 147.177 2.144 147.065 1.008C148.393 1.056 150.649 1.08 153.833 1.08C157.001 1.08 159.249 1.056 160.577 1.008ZM175.795 1.488C175.235 1.52 174.819 1.608 174.547 1.752C174.275 1.88 174.091 2.104 173.995 2.424C173.899 2.728 173.851 3.184 173.851 3.792V11.016C173.851 12.168 173.771 13.16 173.611 13.992C173.467 14.808 173.219 15.512 172.867 16.104C172.467 16.792 171.875 17.336 171.091 17.736C170.323 18.136 169.451 18.336 168.475 18.336C166.715 18.336 165.371 17.904 164.443 17.04C163.739 16.384 163.267 15.64 163.027 14.808C162.787 13.976 162.667 12.736 162.667 11.088V3.552C162.667 2.944 162.619 2.504 162.523 2.232C162.427 1.96 162.243 1.776 161.971 1.68C161.715 1.584 161.299 1.52 160.723 1.488V1.008C161.395 1.056 162.419 1.08 163.795 1.08C165.091 1.08 166.107 1.056 166.843 1.008V1.488C166.267 1.52 165.843 1.584 165.571 1.68C165.315 1.776 165.139 1.96 165.043 2.232C164.947 2.504 164.899 2.944 164.899 3.552V11.496C164.899 12.776 164.987 13.84 165.163 14.688C165.339 15.536 165.699 16.216 166.243 16.728C166.803 17.24 167.619 17.496 168.691 17.496C170.387 17.496 171.579 16.952 172.267 15.864C172.955 14.776 173.299 13.248 173.299 11.28V3.792C173.299 2.928 173.139 2.336 172.819 2.016C172.515 1.696 171.947 1.52 171.115 1.488V1.008C171.691 1.056 172.507 1.08 173.563 1.08C174.523 1.08 175.267 1.056 175.795 1.008V1.488ZM182.794 1.008C185.626 1.008 187.746 1.72 189.154 3.144C190.562 4.552 191.266 6.608 191.266 9.312C191.266 11.056 190.922 12.584 190.234 13.896C189.546 15.208 188.546 16.224 187.234 16.944C185.938 17.648 184.386 18 182.578 18L181.186 17.976C180.29 17.944 179.634 17.928 179.218 17.928C177.906 17.928 176.914 17.952 176.242 18V17.52C176.818 17.488 177.234 17.424 177.49 17.328C177.762 17.232 177.946 17.048 178.042 16.776C178.138 16.504 178.186 16.064 178.186 15.456V3.552C178.186 2.944 178.138 2.504 178.042 2.232C177.946 1.96 177.762 1.776 177.49 1.68C177.234 1.584 176.818 1.52 176.242 1.488V1.008C176.802 1.056 177.578 1.08 178.57 1.08L180.61 1.056C181.698 1.024 182.426 1.008 182.794 1.008ZM182.194 1.44C181.698 1.44 181.322 1.496 181.066 1.608C180.826 1.72 180.658 1.92 180.562 2.208C180.466 2.496 180.418 2.928 180.418 3.504V15.504C180.418 16.08 180.466 16.512 180.562 16.8C180.658 17.088 180.826 17.288 181.066 17.4C181.322 17.512 181.706 17.568 182.218 17.568C183.914 17.568 185.25 17.264 186.226 16.656C187.202 16.032 187.882 15.128 188.266 13.944C188.666 12.76 188.866 11.248 188.866 9.408C188.866 7.568 188.65 6.072 188.218 4.92C187.786 3.752 187.082 2.88 186.106 2.304C185.146 1.728 183.842 1.44 182.194 1.44ZM198.295 1.488C197.719 1.52 197.295 1.584 197.023 1.68C196.767 1.776 196.591 1.96 196.495 2.232C196.399 2.504 196.351 2.944 196.351 3.552V15.456C196.351 16.064 196.399 16.504 196.495 16.776C196.591 17.048 196.767 17.232 197.023 17.328C197.295 17.424 197.719 17.488 198.295 17.52V18C197.559 17.952 196.543 17.928 195.247 17.928C193.871 17.928 192.847 17.952 192.175 18V17.52C192.751 17.488 193.167 17.424 193.423 17.328C193.695 17.232 193.879 17.048 193.975 16.776C194.071 16.504 194.119 16.064 194.119 15.456V3.552C194.119 2.944 194.071 2.504 193.975 2.232C193.879 1.96 193.695 1.776 193.423 1.68C193.167 1.584 192.751 1.52 192.175 1.488V1.008C192.847 1.056 193.871 1.08 195.247 1.08C196.527 1.08 197.543 1.056 198.295 1.008V1.488ZM206.816 0.671999C208.336 0.671999 209.664 1.016 210.8 1.704C211.952 2.392 212.84 3.392 213.464 4.704C214.104 6 214.424 7.552 214.424 9.36C214.424 11.12 214.096 12.68 213.44 14.04C212.8 15.4 211.896 16.456 210.728 17.208C209.576 17.96 208.264 18.336 206.792 18.336C205.272 18.336 203.936 17.992 202.784 17.304C201.648 16.616 200.76 15.624 200.12 14.328C199.496 13.016 199.184 11.456 199.184 9.648C199.184 7.888 199.504 6.328 200.144 4.968C200.8 3.608 201.704 2.552 202.856 1.8C204.024 1.048 205.344 0.671999 206.816 0.671999ZM206.72 1.104C205.696 1.104 204.792 1.464 204.008 2.184C203.24 2.888 202.64 3.88 202.208 5.16C201.792 6.44 201.584 7.904 201.584 9.552C201.584 11.216 201.816 12.68 202.28 13.944C202.76 15.208 203.4 16.184 204.2 16.872C205 17.56 205.896 17.904 206.888 17.904C207.912 17.904 208.808 17.552 209.576 16.848C210.36 16.128 210.96 15.128 211.376 13.848C211.808 12.568 212.024 11.104 212.024 9.456C212.024 7.792 211.784 6.328 211.304 5.064C210.84 3.8 210.208 2.824 209.408 2.136C208.608 1.448 207.712 1.104 206.72 1.104Z"
        fill={color}
      />
      <path
        d="M54.8425 37V30.2789H55.5052V37H54.8425ZM57.8533 31.5V37H57.1906V30.2789H57.7397L62.151 35.883V30.2884H62.8136V37H62.1983L57.8533 31.5ZM69.274 30.8658H66.8791V37H66.2164V30.8658H63.8214V30.2789H69.274V30.8658ZM74.7963 36.4131V37H70.2808V30.2789H74.7111V30.8658H70.9434V33.2892H74.2283V33.8477H70.9434V36.4131H74.7963ZM76.0494 37V30.2789H78.8893C79.1796 30.2789 79.4446 30.3388 79.6844 30.4587C79.9243 30.5787 80.1325 30.7427 80.3092 30.951C80.4922 31.1529 80.6311 31.3801 80.7257 31.6326C80.8267 31.8787 80.8772 32.1311 80.8772 32.3899C80.8772 32.7117 80.8141 33.0147 80.6879 33.2987C80.568 33.5826 80.3944 33.8225 80.1672 34.0181C79.9463 34.2137 79.6844 34.3431 79.3815 34.4062L81.0287 37H80.2808L78.6999 34.5198H76.712V37H76.0494ZM76.712 33.9329H78.9082C79.1733 33.9329 79.4036 33.8603 79.5992 33.7152C79.7949 33.57 79.9463 33.3807 80.0536 33.1472C80.1609 32.9074 80.2146 32.6549 80.2146 32.3899C80.2146 32.1185 80.1514 31.8692 80.0252 31.642C79.9053 31.4085 79.7412 31.2224 79.533 31.0835C79.331 30.9384 79.1038 30.8658 78.8514 30.8658H76.712V33.9329ZM82.2339 37V30.2789H82.8966V37H82.2339ZM87.2894 37.0473C86.8161 37.0473 86.3869 36.9527 86.002 36.7633C85.617 36.574 85.2857 36.3184 85.008 35.9966C84.7303 35.6684 84.5158 35.3024 84.3643 34.8985C84.2128 34.4883 84.1371 34.0686 84.1371 33.6394C84.1371 33.1914 84.216 32.7654 84.3738 32.3615C84.5315 31.9513 84.7524 31.5884 85.0364 31.2729C85.3267 30.951 85.6643 30.6986 86.0493 30.5155C86.4343 30.3262 86.8508 30.2316 87.2989 30.2316C87.7722 30.2316 88.2013 30.3294 88.5863 30.525C88.9713 30.7206 89.2994 30.9826 89.5708 31.3107C89.8485 31.6389 90.063 32.0049 90.2145 32.4088C90.366 32.8127 90.4417 33.2261 90.4417 33.6489C90.4417 34.097 90.3628 34.5261 90.205 34.9363C90.0473 35.3402 89.8264 35.7031 89.5424 36.025C89.2584 36.3405 88.9239 36.5898 88.539 36.7728C88.154 36.9558 87.7375 37.0473 87.2894 37.0473ZM84.7998 33.6394C84.7998 34.0055 84.8597 34.3589 84.9796 34.6997C85.0995 35.0342 85.2699 35.3339 85.4908 35.599C85.7117 35.8577 85.9736 36.066 86.2765 36.2238C86.5857 36.3752 86.9234 36.451 87.2894 36.451C87.6744 36.451 88.0183 36.3721 88.3212 36.2143C88.6305 36.0502 88.8924 35.8356 89.1069 35.5706C89.3278 35.2992 89.4951 34.9963 89.6087 34.6618C89.7223 34.3273 89.7791 33.9865 89.7791 33.6394C89.7791 33.2734 89.7191 32.9232 89.5992 32.5887C89.4793 32.2542 89.3057 31.9544 89.0785 31.6894C88.8577 31.4243 88.5958 31.2161 88.2928 31.0646C87.9899 30.9131 87.6554 30.8374 87.2894 30.8374C86.9107 30.8374 86.5668 30.9163 86.2576 31.0741C85.9546 31.2318 85.6927 31.4464 85.4719 31.7178C85.2573 31.9828 85.0901 32.2826 84.9701 32.6171C84.8565 32.9516 84.7998 33.2923 84.7998 33.6394ZM91.691 37V30.2789H94.5309C94.8212 30.2789 95.0863 30.3388 95.3261 30.4587C95.5659 30.5787 95.7742 30.7427 95.9509 30.951C96.1339 31.1529 96.2728 31.3801 96.3674 31.6326C96.4684 31.8787 96.5189 32.1311 96.5189 32.3899C96.5189 32.7117 96.4558 33.0147 96.3296 33.2987C96.2096 33.5826 96.0361 33.8225 95.8089 34.0181C95.588 34.2137 95.3261 34.3431 95.0232 34.4062L96.6703 37H95.9225L94.3416 34.5198H92.3537V37H91.691ZM92.3537 33.9329H94.5499C94.8149 33.9329 95.0453 33.8603 95.2409 33.7152C95.4366 33.57 95.588 33.3807 95.6953 33.1472C95.8026 32.9074 95.8562 32.6549 95.8562 32.3899C95.8562 32.1185 95.7931 31.8692 95.6669 31.642C95.547 31.4085 95.3829 31.2224 95.1747 31.0835C94.9727 30.9384 94.7455 30.8658 94.4931 30.8658H92.3537V33.9329ZM100.288 37V30.2789H102.57C103.283 30.2789 103.876 30.4303 104.349 30.7333C104.829 31.0299 105.189 31.4338 105.429 31.945C105.668 32.4498 105.788 33.0115 105.788 33.63C105.788 34.3116 105.656 34.9048 105.391 35.4097C105.132 35.9145 104.76 36.3058 104.274 36.5835C103.794 36.8612 103.226 37 102.57 37H100.288ZM105.126 33.63C105.126 33.0936 105.025 32.6171 104.823 32.2006C104.627 31.784 104.34 31.459 103.961 31.2255C103.583 30.9857 103.119 30.8658 102.57 30.8658H100.951V36.4131H102.57C103.125 36.4131 103.592 36.29 103.971 36.0439C104.349 35.7978 104.637 35.4665 104.832 35.0499C105.028 34.6271 105.126 34.1538 105.126 33.63ZM111.571 36.4131V37H107.055V30.2789H111.486V30.8658H107.718V33.2892H111.003V33.8477H107.718V36.4131H111.571ZM116.715 31.5379C116.621 31.4306 116.51 31.336 116.384 31.2539C116.258 31.1656 116.116 31.0898 115.958 31.0267C115.8 30.9636 115.63 30.9131 115.447 30.8753C115.27 30.8374 115.081 30.8185 114.879 30.8185C114.292 30.8185 113.86 30.9321 113.582 31.1593C113.311 31.3801 113.175 31.6831 113.175 32.068C113.175 32.3331 113.238 32.5413 113.364 32.6928C113.497 32.8443 113.702 32.9673 113.98 33.062C114.257 33.1567 114.611 33.2545 115.04 33.3555C115.52 33.4564 115.933 33.5763 116.28 33.7152C116.627 33.854 116.895 34.0433 117.085 34.2832C117.274 34.5167 117.369 34.8354 117.369 35.2393C117.369 35.5485 117.309 35.8167 117.189 36.0439C117.069 36.2711 116.902 36.4604 116.687 36.6119C116.473 36.7633 116.217 36.8769 115.92 36.9527C115.624 37.0221 115.299 37.0568 114.945 37.0568C114.598 37.0568 114.264 37.0221 113.942 36.9527C113.626 36.8769 113.327 36.7697 113.043 36.6308C112.759 36.4857 112.494 36.3026 112.247 36.0818L112.579 35.5422C112.699 35.6684 112.841 35.7883 113.005 35.9019C113.175 36.0092 113.361 36.107 113.563 36.1954C113.771 36.2837 113.992 36.3531 114.226 36.4036C114.466 36.4478 114.712 36.4699 114.964 36.4699C115.501 36.4699 115.917 36.3721 116.214 36.1764C116.517 35.9808 116.668 35.6905 116.668 35.3055C116.668 35.0278 116.592 34.807 116.441 34.6429C116.29 34.4725 116.062 34.3336 115.759 34.2264C115.456 34.1191 115.084 34.0149 114.642 33.914C114.175 33.8067 113.781 33.6868 113.459 33.5542C113.137 33.4217 112.894 33.2482 112.73 33.0336C112.572 32.8127 112.494 32.5224 112.494 32.1627C112.494 31.7462 112.594 31.3959 112.796 31.1119C113.005 30.8216 113.289 30.6039 113.648 30.4587C114.008 30.3073 114.421 30.2316 114.888 30.2316C115.185 30.2316 115.46 30.2631 115.712 30.3262C115.971 30.383 116.207 30.4682 116.422 30.5818C116.643 30.6954 116.848 30.8374 117.037 31.0078L116.715 31.5379ZM118.537 37V30.2789H119.2V37H118.537ZM123.583 37.0473C123.135 37.0473 122.718 36.9527 122.333 36.7633C121.949 36.5677 121.614 36.3058 121.33 35.9776C121.046 35.6495 120.825 35.2834 120.667 34.8795C120.516 34.4756 120.44 34.0591 120.44 33.63C120.44 33.1756 120.516 32.7465 120.667 32.3426C120.825 31.9323 121.043 31.5695 121.321 31.2539C121.598 30.9384 121.926 30.6891 122.305 30.5061C122.684 30.3231 123.097 30.2316 123.545 30.2316C124.208 30.2316 124.747 30.3672 125.164 30.6386C125.58 30.91 125.896 31.2634 126.111 31.6988L125.599 32.0396C125.385 31.6231 125.098 31.317 124.738 31.1214C124.378 30.9258 123.977 30.8279 123.536 30.8279C123.163 30.8279 122.826 30.9068 122.523 31.0646C122.226 31.2224 121.971 31.4338 121.756 31.6988C121.541 31.9639 121.377 32.2637 121.264 32.5981C121.157 32.9326 121.103 33.2797 121.103 33.6394C121.103 34.0181 121.166 34.3778 121.292 34.7186C121.418 35.0531 121.598 35.3529 121.832 35.6179C122.065 35.8767 122.333 36.0818 122.636 36.2332C122.946 36.3784 123.277 36.451 123.63 36.451C124.041 36.451 124.429 36.35 124.795 36.148C125.161 35.9398 125.511 35.6211 125.846 35.1919V35.8924C125.208 36.6624 124.454 37.0473 123.583 37.0473ZM125.741 34.2074H124.246V33.6962H126.3V37H125.741V34.2074ZM128.324 31.5V37H127.661V30.2789H128.21L132.622 35.883V30.2884H133.284V37H132.669L128.324 31.5ZM141.315 31.5379C141.22 31.4306 141.11 31.336 140.984 31.2539C140.858 31.1656 140.716 31.0898 140.558 31.0267C140.4 30.9636 140.23 30.9131 140.047 30.8753C139.87 30.8374 139.681 30.8185 139.479 30.8185C138.892 30.8185 138.459 30.9321 138.182 31.1593C137.91 31.3801 137.775 31.6831 137.775 32.068C137.775 32.3331 137.838 32.5413 137.964 32.6928C138.097 32.8443 138.302 32.9673 138.579 33.062C138.857 33.1567 139.21 33.2545 139.64 33.3555C140.119 33.4564 140.533 33.5763 140.88 33.7152C141.227 33.854 141.495 34.0433 141.684 34.2832C141.874 34.5167 141.968 34.8354 141.968 35.2393C141.968 35.5485 141.908 35.8167 141.788 36.0439C141.668 36.2711 141.501 36.4604 141.287 36.6119C141.072 36.7633 140.817 36.8769 140.52 36.9527C140.223 37.0221 139.898 37.0568 139.545 37.0568C139.198 37.0568 138.863 37.0221 138.541 36.9527C138.226 36.8769 137.926 36.7697 137.642 36.6308C137.358 36.4857 137.093 36.3026 136.847 36.0818L137.178 35.5422C137.298 35.6684 137.44 35.7883 137.604 35.9019C137.775 36.0092 137.961 36.107 138.163 36.1954C138.371 36.2837 138.592 36.3531 138.825 36.4036C139.065 36.4478 139.311 36.4699 139.564 36.4699C140.1 36.4699 140.517 36.3721 140.813 36.1764C141.116 35.9808 141.268 35.6905 141.268 35.3055C141.268 35.0278 141.192 34.807 141.041 34.6429C140.889 34.4725 140.662 34.3336 140.359 34.2264C140.056 34.1191 139.684 34.0149 139.242 33.914C138.775 33.8067 138.381 33.6868 138.059 33.5542C137.737 33.4217 137.494 33.2482 137.33 33.0336C137.172 32.8127 137.093 32.5224 137.093 32.1627C137.093 31.7462 137.194 31.3959 137.396 31.1119C137.604 30.8216 137.888 30.6039 138.248 30.4587C138.608 30.3073 139.021 30.2316 139.488 30.2316C139.785 30.2316 140.059 30.2631 140.312 30.3262C140.57 30.383 140.807 30.4682 141.022 30.5818C141.243 30.6954 141.448 30.8374 141.637 31.0078L141.315 31.5379ZM147.898 30.8658H145.503V37H144.841V30.8658H142.446V30.2789H147.898V30.8658ZM151.641 37.0473C151.111 37.0473 150.663 36.9527 150.297 36.7633C149.931 36.574 149.64 36.3216 149.426 36.006C149.211 35.6842 149.053 35.3213 148.953 34.9174C148.858 34.5135 148.811 34.097 148.811 33.6678V30.2789H149.464V33.6678C149.464 34.0149 149.498 34.3557 149.568 34.6902C149.644 35.0247 149.763 35.3245 149.928 35.5895C150.092 35.8546 150.313 36.066 150.59 36.2238C150.868 36.3752 151.215 36.451 151.631 36.451C152.061 36.451 152.414 36.3721 152.692 36.2143C152.976 36.0502 153.197 35.8356 153.354 35.5706C153.518 35.3055 153.635 35.0089 153.705 34.6807C153.774 34.3463 153.809 34.0086 153.809 33.6678V30.2789H154.471V33.6678C154.471 34.1159 154.421 34.5451 154.32 34.9553C154.219 35.3655 154.055 35.7252 153.828 36.0344C153.607 36.3437 153.316 36.5898 152.957 36.7728C152.597 36.9558 152.158 37.0473 151.641 37.0473ZM156.051 37V30.2789H158.333C159.046 30.2789 159.639 30.4303 160.112 30.7333C160.592 31.0299 160.952 31.4338 161.191 31.945C161.431 32.4498 161.551 33.0115 161.551 33.63C161.551 34.3116 161.419 34.9048 161.154 35.4097C160.895 35.9145 160.522 36.3058 160.037 36.5835C159.557 36.8612 158.989 37 158.333 37H156.051ZM160.888 33.63C160.888 33.0936 160.788 32.6171 160.586 32.2006C160.39 31.784 160.103 31.459 159.724 31.2255C159.345 30.9857 158.882 30.8658 158.333 30.8658H156.714V36.4131H158.333C158.888 36.4131 159.355 36.29 159.734 36.0439C160.112 35.7978 160.399 35.4665 160.595 35.0499C160.791 34.6271 160.888 34.1538 160.888 33.63ZM162.818 37V30.2789H163.481V37H162.818ZM167.874 37.0473C167.4 37.0473 166.971 36.9527 166.586 36.7633C166.201 36.574 165.87 36.3184 165.592 35.9966C165.315 35.6684 165.1 35.3024 164.949 34.8985C164.797 34.4883 164.721 34.0686 164.721 33.6394C164.721 33.1914 164.8 32.7654 164.958 32.3615C165.116 31.9513 165.337 31.5884 165.621 31.2729C165.911 30.951 166.249 30.6986 166.634 30.5155C167.018 30.3262 167.435 30.2316 167.883 30.2316C168.356 30.2316 168.786 30.3294 169.17 30.525C169.555 30.7206 169.884 30.9826 170.155 31.3107C170.433 31.6389 170.647 32.0049 170.799 32.4088C170.95 32.8127 171.026 33.2261 171.026 33.6489C171.026 34.097 170.947 34.5261 170.789 34.9363C170.631 35.3402 170.411 35.7031 170.127 36.025C169.843 36.3405 169.508 36.5898 169.123 36.7728C168.738 36.9558 168.322 37.0473 167.874 37.0473ZM165.384 33.6394C165.384 34.0055 165.444 34.3589 165.564 34.6997C165.684 35.0342 165.854 35.3339 166.075 35.599C166.296 35.8577 166.558 36.066 166.861 36.2238C167.17 36.3752 167.508 36.451 167.874 36.451C168.259 36.451 168.603 36.3721 168.905 36.2143C169.215 36.0502 169.477 35.8356 169.691 35.5706C169.912 35.2992 170.079 34.9963 170.193 34.6618C170.306 34.3273 170.363 33.9865 170.363 33.6394C170.363 33.2734 170.303 32.9232 170.183 32.5887C170.063 32.2542 169.89 31.9544 169.663 31.6894C169.442 31.4243 169.18 31.2161 168.877 31.0646C168.574 30.9131 168.24 30.8374 167.874 30.8374C167.495 30.8374 167.151 30.9163 166.842 31.0741C166.539 31.2318 166.277 31.4464 166.056 31.7178C165.841 31.9828 165.674 32.2826 165.554 32.6171C165.441 32.9516 165.384 33.2923 165.384 33.6394Z"
        fill={color}
      />
    </svg>
  );
}